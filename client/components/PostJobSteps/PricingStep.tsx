import { Calculator, Clock, Users, DollarSign, Info } from "lucide-react";

interface PricingStepProps {
  workerNeed: number;
  workerEarn: number;
  workDuration: number;
  maxWorkersPerUser: number;
  priority: string;
  autoApproval: boolean;
  onWorkerNeedChange: (value: number) => void;
  onWorkerEarnChange: (value: number) => void;
  onWorkDurationChange: (value: number) => void;
  onMaxWorkersPerUserChange: (value: number) => void;
  onPriorityChange: (priority: string) => void;
  onAutoApprovalChange: (checked: boolean) => void;
}

const priorityOptions = [
  { value: "normal", label: "Normal", multiplier: 1, description: "Standard processing time" },
  { value: "high", label: "High Priority", multiplier: 1.5, description: "25% faster completion" },
  { value: "urgent", label: "Urgent", multiplier: 2, description: "50% faster completion" },
];

export default function PricingStep({
  workerNeed,
  workerEarn,
  workDuration,
  maxWorkersPerUser,
  priority,
  autoApproval,
  onWorkerNeedChange,
  onWorkerEarnChange,
  onWorkDurationChange,
  onMaxWorkersPerUserChange,
  onPriorityChange,
  onAutoApprovalChange,
}: PricingStepProps) {
  const calculateCosts = () => {
    const baseCost = workerNeed * workerEarn;
    const priorityMultiplier = priorityOptions.find(p => p.value === priority)?.multiplier || 1;
    const priorityCost = baseCost * (priorityMultiplier - 1);
    const serviceFee = (baseCost + priorityCost) * 0.1; // 10% service fee
    const totalCost = baseCost + priorityCost + serviceFee;
    
    return {
      baseCost: baseCost.toFixed(3),
      priorityCost: priorityCost.toFixed(3),
      serviceFee: serviceFee.toFixed(3),
      totalCost: totalCost.toFixed(3),
    };
  };

  const costs = calculateCosts();

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-2">
        <h3 className="text-xl font-semibold text-gray-900">Job Pricing & Settings</h3>
        <Calculator className="w-5 h-5 text-gray-400" />
      </div>

      {/* Main Pricing Settings */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Workers Needed */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Users className="w-4 h-4 mr-2" />
            Workers Needed *
          </label>
          <input
            type="number"
            min="1"
            max="10000"
            value={workerNeed}
            onChange={(e) => onWorkerNeedChange(parseInt(e.target.value) || 1)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent text-lg"
            placeholder="Enter number of workers"
          />
          <p className="text-xs text-gray-500">
            Total number of workers required to complete this job
          </p>
        </div>

        {/* Worker Earnings */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <DollarSign className="w-4 h-4 mr-2" />
            Payment per Worker *
          </label>
          <input
            type="number"
            min="0.001"
            step="0.001"
            value={workerEarn}
            onChange={(e) => onWorkerEarnChange(parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent text-lg"
            placeholder="Amount per worker"
          />
          <p className="text-xs text-gray-500">
            Amount each worker will earn for completing the task
          </p>
        </div>

        {/* Work Duration */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Clock className="w-4 h-4 mr-2" />
            Work Duration (Days) *
          </label>
          <input
            type="number"
            min="1"
            max="365"
            value={workDuration}
            onChange={(e) => onWorkDurationChange(parseInt(e.target.value) || 1)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent text-lg"
            placeholder="Days to complete"
          />
          <p className="text-xs text-gray-500">
            Maximum time allowed for workers to complete the job
          </p>
        </div>

        {/* Max Workers Per User */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Users className="w-4 h-4 mr-2" />
            Max Tasks per Worker
          </label>
          <input
            type="number"
            min="1"
            max="100"
            value={maxWorkersPerUser}
            onChange={(e) => onMaxWorkersPerUserChange(parseInt(e.target.value) || 1)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent text-lg"
            placeholder="Max tasks per worker"
          />
          <p className="text-xs text-gray-500">
            Maximum number of times one worker can complete this job
          </p>
        </div>
      </div>

      {/* Priority Settings */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Job Priority
        </label>
        <div className="grid md:grid-cols-3 gap-4">
          {priorityOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => onPriorityChange(option.value)}
              className={`p-4 rounded-lg border-2 text-left transition-colors ${
                priority === option.value
                  ? "border-brand-green bg-green-50"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">{option.label}</h4>
                {option.multiplier > 1 && (
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                    +{Math.round((option.multiplier - 1) * 100)}%
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600">{option.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Additional Settings */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900">Additional Settings</h4>
        
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="autoApproval"
            checked={autoApproval}
            onChange={(e) => onAutoApprovalChange(e.target.checked)}
            className="mt-1 w-4 h-4 text-brand-green bg-gray-100 border-gray-300 rounded focus:ring-brand-green focus:ring-2"
          />
          <div>
            <label htmlFor="autoApproval" className="text-sm font-medium text-gray-700 cursor-pointer">
              Enable Auto Approval
            </label>
            <p className="text-xs text-gray-500 mt-1">
              Automatically approve submissions that meet your criteria. Faster payments for workers.
            </p>
          </div>
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Info className="w-5 h-5 text-gray-400" />
          <h4 className="text-lg font-semibold text-gray-900">Cost Breakdown</h4>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Base Cost ({workerNeed} × ${workerEarn})</span>
            <span className="font-medium">${costs.baseCost}</span>
          </div>
          
          {parseFloat(costs.priorityCost) > 0 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Priority Fee</span>
              <span className="font-medium text-orange-600">${costs.priorityCost}</span>
            </div>
          )}
          
          <div className="flex justify-between">
            <span className="text-gray-600">Service Fee (10%)</span>
            <span className="font-medium">${costs.serviceFee}</span>
          </div>
          
          <div className="border-t pt-3">
            <div className="flex justify-between">
              <span className="text-lg font-semibold text-gray-900">Total Cost</span>
              <span className="text-lg font-bold text-brand-green">${costs.totalCost}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Estimated Completion */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h5 className="font-medium text-blue-900 mb-2">Estimated Completion Time</h5>
        <p className="text-sm text-blue-800">
          Based on your settings, this job will likely be completed within{" "}
          <span className="font-semibold">
            {priority === "urgent" ? Math.ceil(workDuration * 0.5) : 
             priority === "high" ? Math.ceil(workDuration * 0.75) : 
             workDuration} days
          </span>{" "}
          after posting.
        </p>
      </div>
    </div>
  );
}
