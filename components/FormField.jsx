import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function FormField({ id, label, type, as = "input", ...props }) {
  const Component = as === "input" ? Input : Textarea;
  return (
    <div className="mb-4">
      <Label htmlFor={id} className="block mb-2">
        {label}
      </Label>
      <Component id={id} type={type} {...props} />
    </div>
  );
}
