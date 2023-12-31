/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fMteUPvGJ18
 */
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import avatar from '../assets/avatar.png';

export default function Converter() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <Card className="w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <CardHeader className="flex justify-between items-center p-12">
          <h2 className="text-2xl font-semibold">Dict to JSON Converter</h2>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="font-semibold">Python Dictionary</div>
              <Textarea
                className="w-full h-64 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white p-4"
                id="python-dict"
                placeholder="Enter Python dictionary here"
              />
            </div>
            <div>
              <div className="font-semibold">JSON</div>
              <Textarea
                className="w-full h-64 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white p-4"
                id="json-output"
                placeholder="Converted JSON will appear here"
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <Button className="bg-blue-500 text-white rounded-md px-4 py-2 mr-2">Convert + Minify</Button>
            <Button className="bg-blue-500 text-white rounded-md px-4 py-2">Convert + Beautify</Button>
          </div>
        </CardContent>
      </Card>
      <div className="mt-4 flex items-center">
        <Avatar className="w-10 h-10 rounded-full">
            <AvatarImage src={avatar} />
        </Avatar>
        <div className="ml-2">
          <div className="text-sm font-medium">Mridula Prabhu</div>
        </div>
      </div>
    </main>
  )
}

