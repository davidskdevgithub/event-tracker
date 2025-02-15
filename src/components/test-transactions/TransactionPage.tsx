import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Building2, Wallet, ArrowRight, BarChart2, Award,
  Calendar, GraduationCap, Scale, CircleDollarSign,
  Clock, FileText, Info, Download
} from 'lucide-react';

const TransactionHeader = ({ transaction }) => (
  <div className="flex justify-between items-center mb-6">
    <div>
      <h1 className="text-2xl font-semibold mb-2">Natural gas transaction details</h1>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Transaction ID: {transaction.id}</span>
        <Badge variant="outline">{transaction.status}</Badge>
      </div>
    </div>
    <div className="flex gap-2">
      <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors">
        Reject
      </button>
      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors">
        Approve
      </button>
    </div>
  </div>
);

const TransactionFlow = ({ seller, buyer }) => (
  <Card className="p-6 bg-white">
    <div className="flex items-center justify-between gap-6">
      {/* Seller Side */}
      <div className="flex-1 space-y-4">
        <div className="p-4 bg-blue-50 rounded-lg space-y-2">
          <div className="flex items-center gap-2">
            <Building2 className="w-6 h-6 text-blue-600" />
            <h3 className="font-semibold">Seller</h3>
          </div>
          <div className="pl-8">
            <p className="font-medium">{seller.name}</p>
            <div className="flex gap-2 mt-1">
              <span className="text-sm text-gray-600">EIN: {seller.ein}</span>
              <span className="text-sm text-gray-600">{seller.jurisdiction}</span>
            </div>
          </div>
        </div>

        <div className="p-4 border rounded-lg space-y-2">
          <div className="flex items-center gap-2">
            <Wallet className="w-5 h-5 text-blue-600" />
            <span className="font-medium">Source Wallet</span>
          </div>
          <div className="pl-7 space-y-1">
            <p className="text-sm break-all">{seller.wallet.address}</p>
            <div className="flex gap-2">
              <Badge variant="outline">{seller.wallet.status}</Badge>
              <Badge variant="outline">{seller.wallet.type}</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex flex-col items-center gap-2">
        <div className="h-2 w-24 bg-gradient-to-r from-blue-200 via-green-200 to-green-200 rounded-full" />
        <ArrowRight className="w-8 h-8 text-gray-400" />
        <span className="text-sm font-medium text-gray-600">Transfer</span>
      </div>

      {/* Buyer Side */}
      <div className="flex-1 space-y-4">
        <div className="p-4 bg-green-50 rounded-lg space-y-2">
          <div className="flex items-center gap-2">
            <Building2 className="w-6 h-6 text-green-600" />
            <h3 className="font-semibold">Buyer</h3>
          </div>
          <div className="pl-8">
            <p className="font-medium">{buyer.name}</p>
            <div className="flex gap-2 mt-1">
              <span className="text-sm text-gray-600">EIN: {buyer.ein}</span>
              <span className="text-sm text-gray-600">{buyer.jurisdiction}</span>
            </div>
          </div>
        </div>

        <div className="p-4 border rounded-lg space-y-2">
          <div className="flex items-center gap-2">
            <Wallet className="w-5 h-5 text-green-600" />
            <span className="font-medium">Destination Wallet</span>
          </div>
          <div className="pl-7 space-y-1">
            <p className="text-sm break-all">{buyer.wallet.address}</p>
            <div className="flex gap-2">
              <Badge variant="outline">{buyer.wallet.status}</Badge>
              <Badge variant="outline">{buyer.wallet.type}</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
);

const TransactionSidebar = ({ signatures, documents }) => (
  <Card className="w-80">
    <div className="p-4">
      <div className="space-y-8">
        {/* Signatures */}
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="font-medium">Signatures Required</h3>
          </div>
          <div className="ml-4 border-l pl-8 space-y-4">
            {signatures.map((sig, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-10 top-1.5 w-3 h-3 rounded-full border-2 border-amber-500 bg-white"></div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">{sig.name}</p>
                  <Badge variant="outline" className="text-xs">{sig.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documents */}
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-medium">Documents</h3>
          </div>
          <div className="ml-4 border-l pl-8 space-y-4">
            {documents.map((doc, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-10 top-1.5 w-3 h-3 rounded-full border-2 border-blue-500 bg-white"></div>
                <div className="flex items-center justify-between group">
                  <div>
                    <p className="text-sm font-medium truncate max-w-[180px]">{doc.name}</p>
                    <p className="text-xs text-gray-500">{doc.size}</p>
                  </div>
                  <Download className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Details */}
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <Info className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-medium">Payment Details</h3>
          </div>
          <div className="ml-4 border-l pl-8">
            <div className="relative">
              <div className="absolute -left-10 top-1.5 w-3 h-3 rounded-full border-2 border-green-500 bg-white"></div>
              <p className="text-sm text-gray-600">
                Buyer agrees to wire the amount due to Seller according to the terms identified within the contract document.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
);

const TransactionPage = () => {
  const transaction = {
    id: '1e4f5c82-8275-44ae-86bb-00c9c56ff9fb',
    status: 'signatures_needed',
    seller: {
      name: 'Methane Sox Producer Secondary',
      ein: '26-5239018',
      jurisdiction: 'MC',
      wallet: {
        name: 'Profile wallet - 10-25-2024 14:58:02',
        address: '0xc5BAb83e486c4c1A065c58A6d237959652E563B1',
        status: 'COMPLETE',
        type: 'regular'
      }
    },
    buyer: {
      name: 'Methanol Sox Producer Primary',
      ein: '42-5248854',
      jurisdiction: 'BL',
      wallet: {
        name: 'Profile wallet - 10-25-2024 14:58:19',
        address: '0x59E4389381f14925F02f7fb8B801cD66A8Ba4816',
        status: 'COMPLETE',
        type: 'regular'
      }
    },
    signatures: [
      {
        name: 'Methane Sox Producer Secondary',
        status: 'pending',
        required: 1
      },
      {
        name: 'Methanol Sox Producer Primary',
        status: 'pending',
        required: 1
      }
    ],
    documents: [
      {
        name: '144f3c82-8275-44ae-86bb-00c9c56ff91b-contract.json',
        size: '535 B',
        type: 'json'
      },
      {
        name: 'Methane_Sox_Producer_Secondary_Methanol_Sox_Producer_Primary_11-21-2024.xlsx',
        size: '16.75 kB',
        type: 'excel'
      },
      {
        name: 'EarnDLT_Short_Form_DEATs_Seller_Template_(5).docx',
        size: '30.32 kB',
        type: 'word'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1400px] mx-auto">
        <TransactionHeader transaction={transaction} />
        <div className="flex gap-6">
          <div className="flex-1 space-y-6">
            <TransactionFlow seller={transaction.seller} buyer={transaction.buyer} />
          </div>
          <TransactionSidebar
            signatures={transaction.signatures}
            documents={transaction.documents}
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;