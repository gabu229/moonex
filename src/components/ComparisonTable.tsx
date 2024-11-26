import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { ComparisonPoint } from "@/lib/types";

interface ComparisonTableProps {
  data: ComparisonPoint[];
}

function ComparisonTable({ data }: ComparisonTableProps) {
  return (
    <Table className="mx-auto max-w-screen-x">
      <TableHeader>
        <TableRow>
          <TableHead className="text- *:mx-auto font-conthrax md:text-lg text-[var(--gold)]">
            Comparison
          </TableHead>
          <TableHead className="text-center *:mx-auto font-conthrax text-lg">
            <div className="flex-none flex justify-center gap-3">
              <img src="/logo.svg" className="max-h-9 w-auto" />
              <img src="/letterwork.svg" className="max-h-12 w-auto hidden lg:block" />
            </div>
          </TableHead>
          <TableHead className="text-center *:mx-auto ">
            <div className="flex-none flex justify-center gap-1">
              <img src="/uniswap-icon.png" className="max-h-9 w-auto" />
              <img src="/uniswap-letterwork.png" className="max-h-9 w-auto hidden lg:block" />
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((point, i) => (
          <TableRow key={i} className="text-base text-gray-400 text-center">
            <TableCell className="text-sm md:text-base text-start c-font text-wrap">
              {i + 1}. {point.comparison}
            </TableCell>
            <TableCell className="px-4">
              {point.moonex ? (
                <Check className="text-green-300 mx-auto" />
              ) : (
                <X className="text-red-500 mx-auto" />
              )}
            </TableCell>
            <TableCell className="px-4">
              {point.uniswap ? (
                <Check className="text-green-300 mx-auto" />
              ) : (
                <X className="text-red-500 mx-auto" />
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ComparisonTable;
