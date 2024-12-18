import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const EvaluationForm = () => {
  // Dados de exemplo - em um caso real, viriam de uma API
  const materias = [
    { id: 1, nome: "Matemática", professor: "João Silva", comentario: "" },
    { id: 2, nome: "Português", professor: "Maria Santos", comentario: "" },
    { id: 3, nome: "História", professor: "Pedro Oliveira", comentario: "" },
    { id: 4, nome: "Geografia", professor: "Ana Costa", comentario: "" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Avaliação salva com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Matérias Cursadas</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Matéria</TableHead>
              <TableHead>Professor</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Comentário</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {materias.map((materia) => (
              <TableRow key={materia.id}>
                <TableCell>{materia.nome}</TableCell>
                <TableCell>{materia.professor}</TableCell>
                <TableCell>
                  <div className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id={`continuar-${materia.id}`} />
                      <label
                        htmlFor={`continuar-${materia.id}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Continuar
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id={`estagio-${materia.id}`} />
                      <label
                        htmlFor={`estagio-${materia.id}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Estágio
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id={`aprendiz-${materia.id}`} />
                      <label
                        htmlFor={`aprendiz-${materia.id}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Aprendiz
                      </label>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Textarea
                    placeholder="Adicione um comentário sobre o desempenho do aluno nesta matéria..."
                    className="min-h-[80px]"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Comentários Gerais</h3>
        <Textarea
          placeholder="Adicione seus comentários gerais sobre o aluno aqui..."
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