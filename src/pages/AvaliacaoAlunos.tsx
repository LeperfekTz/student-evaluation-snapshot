import SelectionHeader from "@/components/SelectionHeader";
import EvaluationForm from "@/components/EvaluationForm";

const AvaliacaoAlunos = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Avaliação de Alunos</h1>
        <SelectionHeader />
        <EvaluationForm />
      </div>
    </div>
  );
};

export default AvaliacaoAlunos;