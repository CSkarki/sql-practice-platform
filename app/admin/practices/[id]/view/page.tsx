'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { useReactToPrint } from 'react-to-print'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export default function PracticeViewPage() {
  const router = useRouter()
  const params = useParams()
  const practiceId = params.id as string
  const [practice, setPractice] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [showAnswers, setShowAnswers] = useState(false)
  const printRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    loadPractice()
  }, [practiceId])

  async function loadPractice() {
    try {
      const res = await fetch(`/api/admin/practices/${practiceId}`)
      const data = await res.json()
      if (data.practice) {
        setPractice(data.practice)
      } else {
        router.push('/admin/practices')
      }
    } catch (error) {
      console.error('Error loading practice:', error)
      router.push('/admin/practices')
    } finally {
      setLoading(false)
    }
  }

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: practice?.title || 'Practice Set',
  })

  async function handleDownloadPDF() {
    if (!printRef.current) return

    try {
      const canvas = await html2canvas(printRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      })

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
      const imgX = (pdfWidth - imgWidth * ratio) / 2
      const imgY = 10

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)
      
      // Add more pages if content is longer
      let heightLeft = imgHeight * ratio
      let position = 0

      while (heightLeft > 0) {
        position = heightLeft - pdfHeight + 10
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', imgX, position, imgWidth * ratio, imgHeight * ratio)
        heightLeft -= pdfHeight
      }

      pdf.save(`${practice?.title || 'practice-set'}.pdf`)
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Error generating PDF. Please try again.')
    }
  }

  if (loading) {
    return <div className="px-4 py-6 sm:px-0">Loading...</div>
  }

  if (!practice) {
    return <div className="px-4 py-6 sm:px-0">Practice set not found</div>
  }

  const questions = JSON.parse(practice.questions || '[]')
  const answers = JSON.parse(practice.answers || '[]')
  const focusAreas = JSON.parse(practice.focusAreas || '[]')

  return (
    <div className="px-4 py-6 sm:px-0">
      {/* Action Buttons - Hidden in Print */}
      <div className="mb-6 flex justify-between items-center print:hidden">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          ← Back
        </button>
        <div className="flex space-x-3">
          <label className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
            <input
              type="checkbox"
              checked={showAnswers}
              onChange={(e) => setShowAnswers(e.target.checked)}
              className="mr-2"
            />
            Show Answers
          </label>
          <button
            onClick={handlePrint}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            🖨️ Print
          </button>
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            📥 Download PDF
          </button>
        </div>
      </div>

      {/* Printable Content */}
      <div ref={printRef} className="bg-white p-8 print:p-4">
        {/* Header */}
        <div className="mb-8 border-b-2 border-gray-300 pb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{practice.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span><strong>Business Domain:</strong> {practice.businessDomain}</span>
            <span><strong>Category:</strong> <span className="capitalize">{practice.category}</span></span>
            <span><strong>Questions:</strong> {questions.length}</span>
            {focusAreas.length > 0 && (
              <span><strong>Focus Areas:</strong> {focusAreas.join(', ')}</span>
            )}
          </div>
          <div className="mt-2 text-xs text-gray-500">
            Created: {new Date(practice.createdAt).toLocaleDateString()}
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-8">
          {questions.map((q: any, index: number) => {
            const answer = answers[index]
            return (
              <div key={index} className="border-b border-gray-200 pb-6 page-break-inside-avoid">
                <div className="mb-3">
                  <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded">
                    Question {index + 1}
                  </span>
                </div>
                <div className="mb-4">
                  <p className="text-lg font-medium text-gray-900 mb-2">{q.question}</p>
                  {q.schema && (
                    <div className="mt-3 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Database Schema:</p>
                      <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono bg-white p-3 rounded border border-blue-200">{q.schema}</pre>
                    </div>
                  )}
                  {q.context && !q.schema && (
                    <div className="mt-3 p-4 bg-gray-50 border-l-4 border-indigo-500 rounded">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Context:</p>
                      <pre className="text-sm text-gray-600 whitespace-pre-wrap font-mono">{q.context}</pre>
                    </div>
                  )}
                </div>
                
                {showAnswers && answer && (
                  <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                    <p className="text-sm font-semibold text-green-800 mb-2">Answer:</p>
                    <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono mb-3">{answer.answer}</pre>
                    {answer.explanation && (
                      <div className="mt-3 pt-3 border-t border-green-200">
                        <p className="text-sm font-semibold text-green-800 mb-2">Explanation:</p>
                        <p className="text-sm text-gray-700">{answer.explanation}</p>
                      </div>
                    )}
                  </div>
                )}

                {!showAnswers && (
                  <div className="mt-4 p-4 bg-gray-50 border border-dashed border-gray-300 rounded">
                    <p className="text-sm text-gray-500 italic">Answer space (hidden in print)</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-4 border-t border-gray-300 text-center text-sm text-gray-500 print:mt-8">
          <p>SQL Practice Platform - {practice.title}</p>
          <p className="mt-1">Page generated on {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}

