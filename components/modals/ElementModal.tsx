"use client";

import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import {
  Button,
  CategorySelect,
  CounterSelect,
  CountrySelect,
  Input,
  Modal,
} from "..";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { elementModalFunc } from "@/redux/modalSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { categories } from "@/constants";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";

const ElementModal = () => {
  const [imgSrc, setImgSrc] = useState([])
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      imageSrc: "",
      category: "",
      roomCount: 1,
      location: null,
    },
  });

  const router = useRouter();
  const { elementModal } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    axios.post("/api/listings", data)
    .then(() => {
      toast.success("Ekleme işlemi başarılı");
      router.refresh();
      reset()
      dispatch(elementModalFunc());
    })
    .catch((error) => {
      toast.error("Ekleme işleme baaşrısız");
      console.log(error, "error")
    })
  };

  const category = watch("category");
  const imageSrc = watch("imageSrc");
  const roomCount = watch("roomCount");
  const location = watch("location");

  const customSetValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const imageSelectFunc = (e: any) => {
    for (const file of e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImgSrc((imgs):any => [...imgs, reader.result]);
        return customSetValue("imageSrc", reader.result);
      }
      reader.onerror = () => {
        console.log(reader.error);
      }
    }
  }

  const bodyElement = (
    <>
      <div className="flex items-center gap-10 mb-5">
        {categories.map((cat, i) => (
          <CategorySelect
            key={i}
            name={cat.name}
            icon={cat.icon}
            onClick={(category) => {
              customSetValue("category", category);
            }}
            selected={category == cat.name}
          />
        ))}
      </div>
      <div className="mb-5">
        <CountrySelect
          value={location}
          onChange={(value) => {
            customSetValue("location", value);
          }}
        />
      </div>
      <div className="mb-5">
        <CounterSelect
          title={"Stok Sayısı"}
          description={"Stok Sayısı Miktarı(Açıklama)"}
          value={roomCount}
          onChange={(value) => {
            customSetValue("roomCount", value);
          }}
        />
      </div>
      <input className="mb-6" multiple type="file" name="file" onChange={val => imageSelectFunc(val)}/>
      <div className="mb-4">
        <Image 
          src={imageSrc}
          alt=""
          width={200}
          height={200}
        />
      </div>
    </>
  );

  return (
    <div>
      <Modal
        bodyElement={bodyElement}
        isOpen={elementModal}
        onClose={() => {
          dispatch(elementModalFunc());
        }}
        onSubmit={handleSubmit(onSubmit)}
        title="Create Listing"
        btnLabel="Create"
      />
    </div>
  );
};

export default ElementModal;
