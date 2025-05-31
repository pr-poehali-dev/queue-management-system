import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const QueueTimer = () => {
  const estimatedTime = 15; // минуты
  const progress = 60; // процент прогресса

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-green-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-center text-gray-800">
          Примерное время ожидания
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600">
            {estimatedTime} мин
          </div>
          <div className="text-sm text-gray-500">осталось примерно</div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs text-gray-500">
            <span>Прогресс</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="text-xs text-center text-gray-400">
          Время может изменяться в зависимости от скорости обслуживания
        </div>
      </CardContent>
    </Card>
  );
};

export default QueueTimer;
