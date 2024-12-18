import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const EvaluationForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Avaliação salva com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Status do Aluno</h3>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center space-x-2">
            <Checkbox id="passou" />
            <label
              htmlFor="passou"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Passou
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="reprovou" />
            <label
              htmlFor="reprovou"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Reprovou
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="saiu" />
            <label
              htmlFor="saiu"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Saiu
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Comentários</h3>
        <Textarea
          placeholder="Adicione seus comentários sobre o aluno aqui..."
          className="min-h-[150px]"
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit" className="bg-primary hover:bg-primary-dark text-white">
          Salvar Avaliação
        </Button>
      </div>
    </form>
  );
};

export default EvaluationForm;