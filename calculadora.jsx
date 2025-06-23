import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Calculator, Plus, Minus, X, Divide, BarChart3 } from 'lucide-react'
import './App.css'

function App() {
  const [numero1, setNumero1] = useState('')
  const [numero2, setNumero2] = useState('')
  const [resultado, setResultado] = useState('')
  const [operacao, setOperacao] = useState('')

  const calcularSoma = () => {
    const num1 = parseFloat(numero1)
    const num2 = parseFloat(numero2)
    if (!isNaN(num1) && !isNaN(num2)) {
      const soma = num1 + num2
      setResultado(soma.toString())
      setOperacao('Soma')
    } else {
      setResultado('Erro: Digite números válidos')
      setOperacao('')
    }
  }

  const calcularSubtracao = () => {
    const num1 = parseFloat(numero1)
    const num2 = parseFloat(numero2)
    if (!isNaN(num1) && !isNaN(num2)) {
      const subtracao = num1 - num2
      setResultado(subtracao.toString())
      setOperacao('Subtração')
    } else {
      setResultado('Erro: Digite números válidos')
      setOperacao('')
    }
  }

  const calcularMultiplicacao = () => {
    const num1 = parseFloat(numero1)
    const num2 = parseFloat(numero2)
    if (!isNaN(num1) && !isNaN(num2)) {
      const multiplicacao = num1 * num2
      setResultado(multiplicacao.toString())
      setOperacao('Multiplicação')
    } else {
      setResultado('Erro: Digite números válidos')
      setOperacao('')
    }
  }

  const calcularDivisao = () => {
    const num1 = parseFloat(numero1)
    const num2 = parseFloat(numero2)
    if (!isNaN(num1) && !isNaN(num2)) {
      if (num2 !== 0) {
        const divisao = num1 / num2
        setResultado(divisao.toString())
        setOperacao('Divisão')
      } else {
        setResultado('Erro: Divisão por zero não é permitida')
        setOperacao('')
      }
    } else {
      setResultado('Erro: Digite números válidos')
      setOperacao('')
    }
  }

  const calcularMedia = () => {
    const num1 = parseFloat(numero1)
    const num2 = parseFloat(numero2)
    if (!isNaN(num1) && !isNaN(num2)) {
      const media = (num1 + num2) / 2
      setResultado(media.toString())
      setOperacao('Média')
    } else {
      setResultado('Erro: Digite números válidos')
      setOperacao('')
    }
  }

  const limparCampos = () => {
    setNumero1('')
    setNumero2('')
    setResultado('')
    setOperacao('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Calculator className="h-8 w-8 text-blue-600 mr-2" />
            <CardTitle className="text-2xl font-bold text-gray-800">
              Calculadora Matemática
            </CardTitle>
          </div>
          <CardDescription>
            Digite dois números e escolha uma operação matemática
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Campos de entrada */}
          <div className="space-y-4">
            <div>
              <label htmlFor="numero1" className="block text-sm font-medium text-gray-700 mb-1">
                Primeiro número
              </label>
              <Input
                id="numero1"
                type="number"
                placeholder="Digite o primeiro número"
                value={numero1}
                onChange={(e) => setNumero1(e.target.value)}
                className="text-center text-lg"
              />
            </div>
            <div>
              <label htmlFor="numero2" className="block text-sm font-medium text-gray-700 mb-1">
                Segundo número
              </label>
              <Input
                id="numero2"
                type="number"
                placeholder="Digite o segundo número"
                value={numero2}
                onChange={(e) => setNumero2(e.target.value)}
                className="text-center text-lg"
              />
            </div>
          </div>

          {/* Botões de operações */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={calcularSoma}
              className="flex items-center justify-center gap-2 h-12 bg-green-600 hover:bg-green-700 transition-colors"
            >
              <Plus className="h-4 w-4" />
              Soma
            </Button>
            <Button
              onClick={calcularSubtracao}
              className="flex items-center justify-center gap-2 h-12 bg-red-600 hover:bg-red-700 transition-colors"
            >
              <Minus className="h-4 w-4" />
              Subtração
            </Button>
            <Button
              onClick={calcularMultiplicacao}
              className="flex items-center justify-center gap-2 h-12 bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              <X className="h-4 w-4" />
              Multiplicação
            </Button>
            <Button
              onClick={calcularDivisao}
              className="flex items-center justify-center gap-2 h-12 bg-orange-600 hover:bg-orange-700 transition-colors"
            >
              <Divide className="h-4 w-4" />
              Divisão
            </Button>
          </div>

          {/* Botão de média (ocupa toda a largura) */}
          <Button
            onClick={calcularMedia}
            className="w-full flex items-center justify-center gap-2 h-12 bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <BarChart3 className="h-4 w-4" />
            Média
          </Button>

          {/* Área de resultado */}
          {resultado && (
            <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
              <div className="text-center">
                {operacao && (
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {operacao}
                  </p>
                )}
                <p className="text-2xl font-bold text-gray-800">
                  {resultado}
                </p>
              </div>
            </div>
          )}

          {/* Botão limpar */}
          <Button
            onClick={limparCampos}
            variant="outline"
            className="w-full h-10 border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Limpar
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default App

