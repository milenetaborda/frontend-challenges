import Head from "next/head";
import { Inter } from "next/font/google";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

const inter = Inter({ subsets: ["latin"] });

const schema = z
  .object({
    avatar: z
      .instanceof(FileList)
      .transform((list) => list.item(0)!)
      .refine((avatar) => avatar.size <= 5 * 1024 * 1024, {
        message: "File must be less than 5MB",
      }),
    name: z
      .string()
      .nonempty("Name is required")
      .transform((name) => {
        return name
          .trim()
          .split(" ")
          .map((word) => {
            return word[0].toUpperCase().concat(word.slice(1));
          })
          .join(" ");
      }),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(3, "Password must be at least 3 characters"),
    confirmPassword: z.string(),
    age: z.number(),
    terms: z.boolean(),
    techs: z
      .array(
        z.object({
          title: z.string().nonempty("Title is required"),
          knowledge: z.coerce
            .number()
            .min(1, "Knowledge must be at least 1")
            .max(100, "Knowledge must be at most 100"),
        })
      )
      .min(2, "You must have at least 2 technologies"),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .refine((fields) => fields.age >= 20, {
    message: "You must be at least 20 years old",
    path: ["age"],
  })
  .refine((fields) => fields.terms === true, {
    message: "You must accept the terms and conditions",
    path: ["terms"],
  })
  .refine((fields) => fields.email.endsWith("@gmail.com.br"), {
    message: "You must use a gmail.com.br email",
    path: ["email"],
  })
  .transform((fields) => ({
    ...fields,
    email: fields.email.toLocaleLowerCase(),
    password: fields.password.toLocaleLowerCase(),
    confirmPassword: fields.confirmPassword.toLocaleLowerCase(),
  }));

type FormType = z.infer<typeof schema>;

export default function Home() {
  const [output, setOutput] = useState("");
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "techs",
  });

  const addTech = () => append({ title: "", knowledge: 0 });

  const onSubmit = async (data: FormType) => {
    await supabase.storage
      .from("form-react")
      .update(data.avatar.name, data.avatar);

    setOutput(JSON.stringify(data, null, 2));
  };

  const formikProps = (field: keyof FormType) => ({
    ...register(field),
    error: !!errors[field],
    helperText: errors[field]?.message ?? "",
  });

  return (
    <>
      <Head>
        <title>React Hook Form + Zod</title>
        <meta name="description" content="React Hook Form + Zod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={`${inter.className + " " + styles.wrapper}`}>
          <h1 className={styles.title}>React Hook Form + Zod</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth>
              <input type="file" {...formikProps("avatar")} accept="image/*" />

              <TextField
                label="Name"
                margin="normal"
                {...formikProps("name")}
              />

              <TextField
                label="Email"
                margin="normal"
                {...formikProps("email")}
              />

              <TextField
                label="Password"
                margin="normal"
                {...formikProps("password")}
              />

              <TextField
                label="Confirm Password"
                margin="normal"
                {...formikProps("confirmPassword")}
              />

              <FormControl fullWidth margin="normal">
                <InputLabel error={!!errors.age}>Age</InputLabel>
                <Select
                  {...formikProps("age")}
                  labelId="select-age"
                  id="demo-simple-select"
                  label="Age"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                {!!errors.age && (
                  <small className={styles.error}>{errors.age.message}</small>
                )}
              </FormControl>

              <FormGroup>
                <FormControlLabel
                  control={<Checkbox {...formikProps("terms")} />}
                  label="accept terms and conditions"
                />
                {!!errors.terms && (
                  <small className={styles.error}>{errors.terms.message}</small>
                )}
              </FormGroup>

              <div>
                <div className={styles["techs-wrapper"]}>
                  <label htmlFor="">Technologies</label>

                  <button type="button" onClick={addTech}>
                    Add
                  </button>
                </div>

                {fields.map((field, index) => (
                  <div key={field.id} className={styles.techs}>
                    <div>
                      <TextField {...register(`techs.${index}.title`)} />
                      {errors.techs?.[index]?.title && (
                        <small className={styles.error}>
                          {errors.techs[index]?.title?.message}
                        </small>
                      )}
                    </div>

                    <div>
                      <TextField
                        type="number"
                        {...register(`techs.${index}.knowledge`)}
                      />
                      {errors.techs?.[index]?.knowledge && (
                        <small className={styles.error}>
                          {errors.techs[index]?.knowledge?.message}
                        </small>
                      )}
                    </div>
                  </div>
                ))}

                {errors.techs && (
                  <small className={styles.error}>{errors.techs.message}</small>
                )}
              </div>

              <Button
                type="submit"
                variant="contained"
                style={{ marginTop: 5 }}
              >
                Submit
              </Button>
            </FormControl>
          </form>

          <pre style={{ marginTop: 30 }}>{output}</pre>
        </div>
      </main>
    </>
  );
}
