"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useQueryState } from "nuqs";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";

const badgeSchema = z.object({
  name: z.string().min(1, "Name is required").max(20, "Name too long"),
  role: z.string().min(1, "Role is required").max(20, "Role too long"),
});

type BadgeForm = z.infer<typeof badgeSchema>;

export function BadgeForm() {
  const [name, setName] = useQueryState("name", { defaultValue: "" });
  const [role, setRole] = useQueryState("role", { defaultValue: "" });

  const form = useForm<BadgeForm>({
    resolver: zodResolver(badgeSchema),
  });

  const onSubmit = async (data: BadgeForm) => {
    await setName(data.name);
    await setRole(data.role);
  };

  return (
    <div className="w-full max-w-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  style={{ color: "#D9D9D9" }}
                  className="text-sm font-medium"
                >
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your name"
                    className="bg-black/20 border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400/50 focus:ring-yellow-400/20"
                    style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  style={{ color: "#D9D9D9" }}
                  className="text-sm font-medium"
                >
                  Role / Title
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="e.g., AI Engineer, Developer"
                    className="bg-black/20 border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400/50 focus:ring-yellow-400/20"
                    style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full font-medium cursor-pointer"
            style={{ backgroundColor: "#FFDA35", color: "#0C0C0C" }}
          >
            Create Badge
          </Button>
        </form>
      </Form>
    </div>
  );
}
