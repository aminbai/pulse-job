import { useState } from "react";
import { Upload, FileText, Image, Video, Link2, HelpCircle } from "lucide-react";

interface JobDetailsStepProps {
  jobTitle: string;
  jobDescription: string;
  requirements: string;
  needAutoChecker: boolean;
  proof1: string;
  proof2: string;
  proof3Type: string;
  proof4Type: string;
  thumbnailFile: File | null;
  onJobTitleChange: (title: string) => void;
  onJobDescriptionChange: (description: string) => void;
  onRequirementsChange: (requirements: string) => void;
  onAutoCheckerChange: (checked: boolean) => void;
  onProof1Change: (proof: string) => void;
  onProof2Change: (proof: string) => void;
  onProof3TypeChange: (type: string) => void;
  onProof4TypeChange: (type: string) => void;
  onThumbnailUpload: (file: File | null) => void;
}

const proofTypes = [
  { value: "Text Proof", label: "Text Proof", icon: FileText },
  { value: "Screenshot", label: "Screenshot", icon: Image },
  { value: "Video Recording", label: "Video Recording", icon: Video },
  { value: "File Upload", label: "File Upload", icon: Upload },
  { value: "URL Link", label: "URL Link", icon: Link2 },
];

export default function JobDetailsStep({
  jobTitle,
  jobDescription,
  requirements,
  needAutoChecker,
  proof1,
  proof2,
  proof3Type,
  proof4Type,
  thumbnailFile,
  onJobTitleChange,
  onJobDescriptionChange,
  onRequirementsChange,
  onAutoCheckerChange,
  onProof1Change,
  onProof2Change,
  onProof3TypeChange,
  onProof4TypeChange,
  onThumbnailUpload,
}: JobDetailsStepProps) {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    onThumbnailUpload(file || null);
  };

  return (
    <div className="space-y-8">
      {/* Job Basic Information */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">Job Details</h3>
        
        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Job Title *
          </label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => onJobTitleChange(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent text-lg"
            placeholder="Enter a clear and descriptive job title"
          />
        </div>

        {/* Job Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Job Description *
          </label>
          <textarea
            value={jobDescription}
            onChange={(e) => onJobDescriptionChange(e.target.value)}
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent resize-vertical"
            placeholder="Describe the task in detail. Include step-by-step instructions, expected outcomes, and any specific requirements."
          />
        </div>

        {/* Requirements */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Requirements
          </label>
          <textarea
            value={requirements}
            onChange={(e) => onRequirementsChange(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent resize-vertical"
            placeholder="List any special skills, software requirements, or qualifications needed"
          />
        </div>

        {/* Auto Checker */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="autoChecker"
            checked={needAutoChecker}
            onChange={(e) => onAutoCheckerChange(e.target.checked)}
            className="mt-1 w-4 h-4 text-brand-green bg-gray-100 border-gray-300 rounded focus:ring-brand-green focus:ring-2"
          />
          <div>
            <label htmlFor="autoChecker" className="text-sm font-medium text-gray-700 cursor-pointer">
              Enable Auto Checker
            </label>
            <p className="text-xs text-gray-500 mt-1">
              Automatically verify submissions based on predefined criteria
            </p>
          </div>
        </div>
      </div>

      {/* Proof Requirements */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <h3 className="text-xl font-semibold text-gray-900">Proof Requirements</h3>
          <HelpCircle className="w-5 h-5 text-gray-400" />
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            Specify what evidence workers need to provide to prove they completed the task.
            This helps ensure quality and prevents fraud.
          </p>
        </div>

        {/* Proof 1 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Primary Proof Required *
          </label>
          <input
            type="text"
            value={proof1}
            onChange={(e) => onProof1Change(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
            placeholder="e.g., Username, Account link, Confirmation number"
          />
        </div>

        {/* Proof 2 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Secondary Proof Required
          </label>
          <input
            type="text"
            value={proof2}
            onChange={(e) => onProof2Change(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
            placeholder="e.g., Password, Email, Additional verification"
          />
        </div>

        {/* Proof Type 3 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Proof Type 1
          </label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {proofTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => onProof3TypeChange(type.value)}
                  className={`p-3 rounded-lg border text-center transition-colors ${
                    proof3Type === type.value
                      ? "border-brand-green bg-green-50 text-brand-green"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  }`}
                >
                  <IconComponent className="w-5 h-5 mx-auto mb-1" />
                  <span className="text-xs font-medium">{type.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Proof Type 4 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Proof Type 2
          </label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {proofTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => onProof4TypeChange(type.value)}
                  className={`p-3 rounded-lg border text-center transition-colors ${
                    proof4Type === type.value
                      ? "border-brand-green bg-green-50 text-brand-green"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  }`}
                >
                  <IconComponent className="w-5 h-5 mx-auto mb-1" />
                  <span className="text-xs font-medium">{type.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Thumbnail Upload */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">Job Thumbnail</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Job Thumbnail (Optional)
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 transition-colors">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="thumbnail-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-brand-green hover:text-green-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand-green"
                >
                  <span>Upload a file</span>
                  <input
                    id="thumbnail-upload"
                    name="thumbnail-upload"
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleFileUpload}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              {thumbnailFile && (
                <p className="text-sm text-brand-green font-medium">
                  Selected: {thumbnailFile.name}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
