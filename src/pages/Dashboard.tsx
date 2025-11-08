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
      label: "Today's Sales",
      value: "ج.م 2,847.50",
      icon: DollarSign,
      color: "text-green-600 bg-green-100",
    },
    {
      label: "Transactions",
      value: "47",
      icon: ShoppingBag,
      color: "text-blue-600 bg-blue-100",
    },
    {
      label: "Active Customers",
      value: "156",
      icon: Users,
      color: "text-purple-600 bg-purple-100",
    },
    {
      label: "Low Stock Items",
      value: "8",
      icon: Package,
      color: "text-orange-600 bg-orange-100",
    },
  ];

  const recentTransactions = [
    {
      id: "TXN001",
      customer: "Sarah Johnson",
      amount: 45.99,
      time: "2 minutes ago",
    },
    {
      id: "TXN002",
      customer: "Mike Chen",
      amount: 78.5,
      time: "5 minutes ago",
    },
    {
      id: "TXN003",
      customer: "Emma Davis",
      amount: 124.25,
      time: "8 minutes ago",
    },
    {
      id: "TXN004",
      customer: "Alex Wilson",
      amount: 67.8,
      time: "12 minutes ago",
    },
    {
      id: "TXN005",
      customer: "Lisa Brown",
      amount: 203.45,
      time: "15 minutes ago",
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
                className="flex items-center text-right justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex text-right items-center">
                  <Clock className="w-4 h-4 text-gray-400 mr-3" />
                  <div>
                    <p className="text-right font-semibold text-gray-900">
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
