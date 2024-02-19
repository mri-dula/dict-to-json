/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fMteUPvGJ18
 */
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import avatar from '../assets/avatar.png';
import { useState } from "react";
import axios from 'axios';
import CodeMirror from "@uiw/react-codemirror";

export default function Converter() {
  const [dict, setDict] = useState<string>();
  const [json, setJson] = useState<string>();
  const api_server_url = import.meta.env.VITE_API_SERVER_URL;
  const sendConvertAndMinifyRequest = () => {
    axios.post(api_server_url + 'convert_and_minify', {
      text: dict,
    })
      .then(function (response) {
        setJson(response.data)
      })
      .catch(function (error) {
        if (error.response.status == 400) {
          console.log(error.response.data.detail)
          alert("Sorry, could not process your request.")
        }
      });
  }

  const sendConvertAndBeautifyRequest = () => {
    axios.post(api_server_url + 'convert_and_beautify', {
      text: dict,
    })
      .then(function (response) {
        setJson(response.data)
      })
      .catch(function (error) {
        if (error.response.status == 400) {
          console.log(error.response.data.detail)
          alert("Sorry, could not process your request.")
        }
      });
  }
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <Card className="w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <CardHeader className="flex justify-between items-center p-12">
          <h2 className="text-2xl font-semibold">Dict to JSON Converter</h2>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="font-semibold" style={{ "textAlign": "center" }}>Python Dictionary</div>
              <CodeMirror
                value={dict}
                onChange={e => setDict(e)}
                height="250px"
                lang="python"
              />
            </div>
            <div>
              <div className="font-semibold" style={{ "textAlign": "center" }}>JSON</div>
              <CodeMirror
                value={json}
                height="250px"
                readOnly={true}
                lang="javascript"

              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <Button className="bg-blue-500 text-white rounded-md px-4 py-2 mr-2" onClick={sendConvertAndMinifyRequest}>Convert + Minify</Button>
            <Button className="bg-blue-500 text-white rounded-md px-4 py-2" onClick={sendConvertAndBeautifyRequest}>Convert + Beautify</Button>
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

