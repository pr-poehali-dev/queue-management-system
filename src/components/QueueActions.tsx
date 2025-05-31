import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const QueueActions = () => {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border-orange-200">
      <CardContent className="p-4 space-y-3">
        <Button
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium"
          size="lg"
        >
          ⚡ Ускорить очередь (+50₽)
        </Button>

        <Button
          variant="outline"
          className="w-full border-purple-300 text-purple-700 hover:bg-purple-50"
          size="lg"
        >
          👥 Пригласить друга
        </Button>

        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 text-gray-600 hover:text-gray-800"
          >
            📞 Поддержка
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 text-red-600 hover:text-red-800"
          >
            ❌ Покинуть очередь
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QueueActions;
