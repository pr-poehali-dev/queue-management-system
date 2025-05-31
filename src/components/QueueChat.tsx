import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const QueueChat = () => {
  const messages = [
    {
      id: 1,
      user: "Анна",
      message: "Привет всем! Долго ждать?",
      time: "14:30",
    },
    {
      id: 2,
      user: "Михаил",
      message: "Около 20 минут наверное",
      time: "14:32",
    },
    { id: 3, user: "Елена", message: "Я уже час жду 😅", time: "14:35" },
  ];

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-gray-800 flex items-center gap-2">
          💬 Чат очереди
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
            12 участников
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="h-32 overflow-y-auto space-y-2 bg-gray-50 rounded-lg p-3">
          {messages.map((msg) => (
            <div key={msg.id} className="text-sm">
              <div className="flex justify-between items-start">
                <span className="font-medium text-gray-700">{msg.user}:</span>
                <span className="text-xs text-gray-400">{msg.time}</span>
              </div>
              <div className="text-gray-600 mt-1">{msg.message}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            placeholder="Написать сообщение..."
            className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
            📤
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QueueChat;
