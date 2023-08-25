"use client";

import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Button, Input, Modal } from "..";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { loginModalFunc } from "@/redux/modalSlice";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const { loginModal } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    signIn("credentials", {
      ...data,
      redirect: false
    })
    .then((callback) => {
      if (callback?.ok) {
        dispatch(loginModalFunc());
        router.refresh();
        toast.success("Login işlemi başarılı!!!");
      }
      if (callback?.error) {
        toast.error("Login işlemi hatalı!!!");
      }
    });
  };

  const bodyElement = (
    <div>
      <Input
        id="email"
        type="text"
        placeholder="Email"
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        placeholder="Password"
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerElement = (
    <div className="mt-5">
      <Button
        btnLabel="Google ile Giriş"
        outline
        icon={FcGoogle}
        onSubmit={() => {signIn("google")}}
      />
    </div>
  );

  return (
    <div>
      <Modal
        footerElement={footerElement}
        bodyElement={bodyElement}
        isOpen={loginModal}
        onClose={() => {dispatch(loginModalFunc())}}
        onSubmit={handleSubmit(onSubmit)}
        title="Login"
        btnLabel="Login"
      />
    </div>
  );
};

export default LoginModal;
