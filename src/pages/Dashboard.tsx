import React from "react";
import {
  TrendingUp,
  Users,
  Package,
  DollarSign,
  ShoppingBag,
  Clock,
} from "lucide-react";

const Dashboard: React.FC = () => {
  const stats = [
    {
      label: "المبيعات اليومية",
      value: "ج.م 2,847.50",
      icon: DollarSign,
      color: "text-green-600 bg-green-100",
    },
    {
      label: "المنتجات المباعة",
      value: "47",
      icon: ShoppingBag,
      color: "text-blue-600 bg-blue-100",
    },
    {
      label: "الزبائن النشطون",
      value: "156",
      icon: Users,
      color: "text-purple-600 bg-purple-100",
    },
    {
      label: "المنتجات ذات المخزون المنخفض",
      value: "8",
      icon: Package,
      color: "text-orange-600 bg-orange-100",
    },
  ];

  const recentTransactions = [
    {
      id: "TXN001",
      customer: "محمد جمال",
      amount: 45.99,
      time: "2 منذ دقيقة",
    },
    {
      id: "TXN002",
      customer: "إسلام رجب",
      amount: 78.5,
      time: "5 منذ دقيقة",
    },
    {
      id: "TXN003",
      customer: "إيمان شريف",
      amount: 124.25,
      time: "8 منذ دقيقة",
    },
    {
      id: "TXN004",
      customer: "رجب صالح",
      amount: 67.8,
      time: "12 منذ دقيقة",
    },
    {
      id: "TXN005",
      customer: "إسماعيل حسان",
      amount: 203.45,
      time: "15 منذ دقيقة",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <div className="flex flex-row-reverse items-center">
              <div className={`p-3 rounded-full ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            نظرة عامة على المبيعات
          </h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <TrendingUp className="w-16 h-16 text-gray-400" />
            <span className="ml-4 text-gray-500">
              مخطط المبيعات سوف يظهر هنا
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            المعاملات الأخيرة
          </h3>
          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-gray-400 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      ج.م {transaction.amount}
                    </p>
                    <p className="text-sm text-gray-500">{transaction.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">
                    {transaction.customer}
                  </p>
                  <p className="text-sm text-gray-500">{transaction.id}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
