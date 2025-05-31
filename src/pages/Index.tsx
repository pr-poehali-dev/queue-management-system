import QueueStatus from "@/components/QueueStatus";
import QueueChat from "@/components/QueueChat";
import QueueTimer from "@/components/QueueTimer";
import QueueActions from "@/components/QueueActions";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-4">
      <div className="max-w-md mx-auto space-y-4">
        <div className="text-center mb-6">
          <img
            src="https://cdn.poehali.dev/files/02005156-4715-4877-a165-e783a09a2ea3.png"
            alt="Поехали! логотип"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Ваша очередь
          </h1>
          <p className="text-gray-600">Ваша позиция в очереди</p>
        </div>

        <QueueStatus />
        <QueueTimer />
        <QueueChat />
        <QueueActions />
      </div>
    </div>
  );
};

export default Index;
