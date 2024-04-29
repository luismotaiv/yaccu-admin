"use client";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

import { OrderColumn, columns } from "./columns";

interface OrderClientProps {
    data: OrderColumn[]
}

export const OrderClient: React.FC<OrderClientProps> = ({
    data
}) => {

    return (
        <>
            <Heading
                title={`Órdenes (${data.length})`}
                description="Gestionar las órdenes de su tienda"
            />
            <Separator/>
            <DataTable searchKey="products" columns={columns} data={data}/>
        </>
    )
}