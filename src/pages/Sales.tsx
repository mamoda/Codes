import React from 'react';
import { Calendar, Download, Filter } from 'lucide-react';

const Sales: React.FC = () => {
  const salesData = [
    { date: '2024-01-15', transactions: 23, amount: 1250.75, items: 78 },
    { date: '2024-01-14', transactions: 31, amount: 1875.20, items: 102 },
    { date: '2024-01-13', transactions: 18, amount: 945.30, items: 56 },
    { date: '2024-01-12', transactions: 27, amount: 1680.45, items: 89 },
    { date: '2024-01-11', transactions: 35, amount: 2150.80, items: 124 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-row-reverse justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">تقارير المبيعات</h1>
        <div className="flex space-x-3">
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg flex items-center hover:bg-gray-200 transition-colors">
            <Filter className="w-5 h-5 mr-2" />
            تنقية
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors">
            <Download className="w-5 h-5 mr-2" />
            استخراج
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg text-right font-semibold text-gray-900 mb-2">إجمالي المبيعات</h3>
          <p className="text-3xl text-right font-bold text-green-600">SAR8,902.50</p>
          <p className="text-sm text-right text-gray-500 mt-1">هذا الأسبوع</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg text-right font-semibold text-gray-900 mb-2">المعاملات</h3>
          <p className="text-3xl text-right font-bold text-blue-600">134</p>
          <p className="text-sm text-right text-gray-500 mt-1">هذا الأسبوع</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg text-right font-semibold text-gray-900 mb-2">متوسط المبيعات</h3>
          <p className="text-3xl text-right font-bold text-purple-600">SAR66.46</p>
          <p className="text-sm text-right text-gray-500 mt-1">عن كل عملية بيع</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-row-reverse items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">ملخص المبيعات اليومية</h3>
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-gray-400" />
            <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
              <option>آخر 7 ايام</option>
              <option>آخر 10 ايام</option>
              <option>آخر 3 شهور</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  تاريخ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  معاملات
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  الوحدات المباعة 
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   إجمالي الكمي
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  متوسط القيمة
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {salesData.map((day) => (
                <tr key={day.date} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {day.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {day.transactions}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {day.items}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${day.amount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${(day.amount / day.transactions).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sales;