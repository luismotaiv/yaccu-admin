"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

import { BillboardColumn, columns } from "./columns";
import { ApiList } from "@/components/ui/api-list";

interface BillboardClientProps {
    data: BillboardColumn[]
}

export const BillboardClient: React.FC<BillboardClientProps> = ({
    data
}) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Carteles publicitarios (${data.length})`}
                    description="Gestionar los carteles publicitarios de su tienda"
                />
                <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                    <Plus className="mr-2 h-4 w-4"/>
                    Añadir nuevo
                </Button>
            </div>
            <Separator/>
            <DataTable searchKey="label" columns={columns} data={data}/>
            <Heading title="API" description="Llamadas a la API para carteles publicitarios"/>
            <Separator/>
            <ApiList entityName="billboards" entityIdName="billboardId"/>
        </>
    )
}