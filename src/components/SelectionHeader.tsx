import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SelectionHeader = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-6 bg-white rounded-lg shadow-sm">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-2">Classe</label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione a classe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1a">1º Ano A</SelectItem>
            <SelectItem value="1b">1º Ano B</SelectItem>
            <SelectItem value="2a">2º Ano A</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-2">Professor</label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione o professor" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="maria">Maria Silva</SelectItem>
            <SelectItem value="joao">João Santos</SelectItem>
            <SelectItem value="ana">Ana Oliveira</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-2">Aluno</label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione o aluno" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pedro">Pedro Alves</SelectItem>
            <SelectItem value="julia">Julia Costa</SelectItem>
            <SelectItem value="lucas">Lucas Mendes</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SelectionHeader;