import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const QueueStatus = () => {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border-purple-200">
      <CardContent className="p-6 text-center">
        <div className="space-y-4">
          <div className="relative">
            <div className="text-6xl font-bold text-purple-600 animate-pulse py-[19px]">
              3
            </div>
            <Badge
              variant="secondary"
              className="absolute -top-2 -right-2 bg-purple-100 text-purple-700"
            >
              Ваша позиция
            </Badge>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Всего в очереди:</span>
            <Badge variant="outline" className="bg-gray-50">
              12 человек
            </Badge>
          </div>

          <div className="text-xs text-gray-500">Впереди вас: 2 человека</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QueueStatus;
