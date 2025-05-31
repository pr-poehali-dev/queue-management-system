import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";

const QueueActions = () => {
  const [positions, setPositions] = useState([1]);
  const [isOpen, setIsOpen] = useState(false);

  const positionCount = positions[0];
  const totalCost = positionCount * 15;

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-orange-200">
      <CardContent className="p-4 space-y-3">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium"
              size="lg"
            >
              ⚡ Ускорить очередь
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center">
                ⚡ Ускорение очереди
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">
                  {positionCount}{" "}
                  {positionCount === 1
                    ? "позиция"
                    : positionCount < 5
                      ? "позиции"
                      : "позиций"}
                </div>
                <div className="text-sm text-gray-600">
                  Продвинуться на {positionCount}{" "}
                  {positionCount === 1 ? "место" : "места"} вперед
                </div>
              </div>

              <div className="px-4">
                <Slider
                  value={positions}
                  onValueChange={setPositions}
                  max={10}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>1</span>
                  <span>10</span>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-4 text-center">
                <div className="text-sm text-gray-600 mb-1">Стоимость:</div>
                <div className="text-3xl font-bold text-orange-600">
                  {totalCost}₽
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {positionCount} × 15₽
                </div>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium"
                size="lg"
                onClick={() => {
                  setIsOpen(false);
                  // Здесь будет логика оплаты
                }}
              >
                💳 Оплатить {totalCost}₽
              </Button>
            </div>
          </DialogContent>
        </Dialog>

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
