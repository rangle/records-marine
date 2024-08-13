"use client";
import { builder, Builder } from "@builder.io/react";
import { ProfileForm } from "./components/ProfileForm/ProfileForm";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// Builder.registerComponent(Counter, {
//   name: "Counter",
//   inputs: [
//     {
//       name: "initialCount",
//       type: "number",
//     },
//   ],
// });

Builder.registerComponent(ProfileForm,{
    name: "ProfileForm",
    inputs: [],
})

