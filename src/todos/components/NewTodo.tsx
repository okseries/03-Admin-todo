"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { toast } from "sonner"
import { addTodo, deleteCompleted } from "../actions/todo-actions";

const FormSchema = z.object({
  description: z
    .string()
    .min(1, "La descripción es requerida")
    .max(100, "Máximo 100 caracteres"),
});

export function NewTodo() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      description: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    await addTodo(data.description);
    form.reset(); // Limpiar el formulario después de enviar
  };

  const handleDeleteCompleted = () => {
    toast.warning("Se eliminaran las tareas completadas", {
      position: "top-right",
      description: "¿Continuar?",
      action: {
        label: "Sí",
        onClick: () => deleteCompleted(),
      },
      closeButton: true,
      duration: 12000,
      actionButtonStyle: {
        backgroundColor: "#dc2626", // rojo tailwind 600
        color: "white",
        borderRadius: "4px",
        padding: "4px 8px",
      },
    })
  };

  return (
    <Form {...form}>
      <form
        className="flex justify-between items-center gap-4 w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex items-center gap-2 ">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="¿Qué necesita ser hecho?"
                    {...field}
                    className=" w-full md:w-sm"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 cursor-pointer"
          >
            Crear
          </Button>
        </div>

        <Button
          type="button"
          className="bg-red-500 hover:bg-red-600 cursor-pointer"
          onClick={handleDeleteCompleted}
        >
          Eliminar Completados
        </Button>
      </form>
    </Form>
  );
}
