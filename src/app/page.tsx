"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Hello World!
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 leading-relaxed">
              Welcome to your modern Next.js application
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center pt-6">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                This is a beautiful Hello World app built with:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <div className="font-semibold text-blue-700">Next.js 15</div>
                  <div className="text-blue-600">React Framework</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                  <div className="font-semibold text-purple-700">TypeScript</div>
                  <div className="text-purple-600">Type Safety</div>
                </div>
                <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-200">
                  <div className="font-semibold text-indigo-700">Tailwind CSS</div>
                  <div className="text-indigo-600">Styling</div>
                </div>
                <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                  <div className="font-semibold text-green-700">shadcn/ui</div>
                  <div className="text-green-600">Components</div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">Ready to build amazing things!</h3>
                <p className="text-gray-600 text-sm">
                  Your development environment is set up and ready for your next great idea.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}