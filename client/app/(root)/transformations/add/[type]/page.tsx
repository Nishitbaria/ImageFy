import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/dist/server/api-utils";
import React from "react";

export default async function AddTransformationsTypePage({
  params: { type },
}: SearchParamProps) {
  const { userId }: { userId: string | null } = auth();
  // console.log(userId);
  if (!userId) return null;

  const user = await getUserById(userId);
  console.log(user);
  const transformation = transformationTypes[type];

  return (
    <div>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <section className="mt-10">
        <TransformationForm
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </div>
  );
}
