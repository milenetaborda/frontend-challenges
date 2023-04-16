import Head from "next/head";
import { Inter } from "next/font/google";
import { useForm } from "react-hook-form";
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

const inter = Inter({ subsets: ["latin"] });

const schema = z
  .object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(3, "Password must be at least 3 characters"),
    confirmPassword: z.string(),
    age: z.number(),
    terms: z.boolean(),
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
  .transform((fields) => ({
    ...fields,
    email: fields.email.toLocaleLowerCase(),
    password: fields.password.toLocaleLowerCase(),
    confirmPassword: fields.confirmPassword.toLocaleLowerCase(),
  }));

type FormType = z.infer<typeof schema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormType) => console.log(data);

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
        <div className={inter.className}>
          <h1 className={styles.title}>React Hook Form + Zod</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth>
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

              <Button
                type="submit"
                variant="contained"
                style={{ marginTop: 5 }}
              >
                Submit
              </Button>
            </FormControl>
          </form>
        </div>
      </main>
    </>
  );
}
