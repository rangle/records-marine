"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const formSchema = z.object({
  search: z.string().min(8).max(50),
});

const SearchSchema = z.object({
  label: z.string(),
  placeholder: z.string(),
  description: z.string().default("").optional(),
});

export function SearchForm({
  label,
  placeholder,
  description,
}: z.infer<typeof SearchSchema>) {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(`/search/${values.search}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">{label}</FormLabel>
              <FormControl>
                <div className="flex w-full items-center">
                  <Input
                    placeholder={placeholder}
                    {...field}
                    className="rounded-full"
                  />
                  <Button type="submit" className="rounded-full px-1 py-1 -m-12">
                    <Search size={32} />
                  </Button>
                </div>
              </FormControl>
              <FormDescription>{description}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  ); 
}
