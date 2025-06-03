import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: [
      { description: "Comprar víveres para la semana" },
      { description: "Enviar informe mensual al jefe", completed: true },
      { description: "Hacer una copia de seguridad del proyecto" },
      {
        description: "Llamar al mecánico para agendar mantenimiento del carro",
        completed: true,
      },
      { description: "Leer 10 páginas del libro de desarrollo personal" },
      { description: "Actualizar el CV y perfil de LinkedIn" },
      {
        description: "Revisar pull requests pendientes en GitHub",
        completed: true,
      },
      { description: "Pagar la factura del internet" },
      { description: "Organizar carpetas del escritorio", completed: true },
      { description: "Agendar cita médica para revisión anual" },
    ],
  });
  return NextResponse.json({
    message: "seed executed successfully",
  });
}
