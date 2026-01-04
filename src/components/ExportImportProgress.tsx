'use client';
import React, { useState, useRef } from 'react';
import { Download, Upload, AlertCircle, CheckCircle2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useUserProgress } from '@/hooks/useUserProgress';

export default function ExportImportProgress() {
  const { exportProgress, importProgress } = useUserProgress();
  const [isOpen, setIsOpen] = useState(false);
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [importMessage, setImportMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExport = () => {
    const data = exportProgress();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const date = new Date().toISOString().split('T')[0];
    link.href = url;
    link.download = `microleet-progress-${date}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      const success = importProgress(content);

      if (success) {
        setImportStatus('success');
        setImportMessage('Progress imported successfully! Your data has been restored.');
        setTimeout(() => {
          setIsOpen(false);
          setImportStatus('idle');
          // Reload page to reflect changes
          window.location.reload();
        }, 2000);
      } else {
        setImportStatus('error');
        setImportMessage(
          'Failed to import progress. Please ensure the file is a valid Microleet progress backup.',
        );
      }
    };

    reader.onerror = () => {
      setImportStatus('error');
      setImportMessage('Error reading file. Please try again.');
    };

    reader.readAsText(file);

    // Reset input
    event.target.value = '';
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="h-4 w-4" />
          Backup
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Backup & Restore Progress</DialogTitle>
          <DialogDescription>
            Export your progress to save a backup or import a previous backup to restore your data.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Export Section */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Export Progress</h4>
            <p className="text-sm text-gray-500">
              Download your current progress as a JSON file. Keep this safe as a backup!
            </p>
            <Button onClick={handleExport} className="w-full gap-2" variant="default">
              <Download className="h-4 w-4" />
              Download Progress
            </Button>
          </div>

          <div className="border-t pt-4" />

          {/* Import Section */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Import Progress</h4>
            <p className="text-sm text-gray-500">
              Restore your progress from a previously exported backup file.
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept=".json"
              onChange={handleFileChange}
              className="hidden"
            />
            <Button onClick={handleImportClick} className="w-full gap-2" variant="outline">
              <Upload className="h-4 w-4" />
              Upload Backup File
            </Button>
          </div>

          {/* Status Messages */}
          {importStatus === 'success' && (
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-800">Success!</AlertTitle>
              <AlertDescription className="text-green-700">{importMessage}</AlertDescription>
            </Alert>
          )}

          {importStatus === 'error' && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{importMessage}</AlertDescription>
            </Alert>
          )}

          {/* Warning */}
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Important</AlertTitle>
            <AlertDescription className="text-sm">
              Importing will <strong>replace</strong> your current progress. Make sure to export
              your current data first if you want to keep it.
            </AlertDescription>
          </Alert>
        </div>

        <DialogFooter className="sm:justify-start">
          <Button type="button" variant="ghost" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
