import React, { useState, useEffect } from 'react';
import {
  FaPlus,
  FaMinus,
  FaArrowUp,
  FaArrowDown,
  FaInfoCircle,
  FaSearch,
  FaClock,
  FaCogs,
  FaPencilAlt,
  FaExclamationTriangle,
  FaCode,
  FaLightbulb,
  FaCopy,
  FaCheck,
  FaRoute,
} from 'react-icons/fa';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CheatSheetItem, OperationTypes } from '@/common/commonCheatSheet';

interface CheatSheetProps {
  items: CheatSheetItem[];
}

const CheatSheet: React.FC<CheatSheetProps> = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    setExpandedSections([]);
  }, [items]);

  if (!items) {
    return (
      <Alert variant="destructive">
        No cheat sheet available for this data structure.
      </Alert>
    );
  }

  const getIcon = (type: OperationTypes) => {
    const icons = {
      [OperationTypes.Create]: (
        <FaPencilAlt className="text-green-500" aria-label="Create" />
      ),
      [OperationTypes.Add]: (
        <FaPlus className="text-green-500" aria-label="Add" />
      ),
      [OperationTypes.Remove]: (
        <FaMinus className="text-red-500" aria-label="Remove" />
      ),
      [OperationTypes.Access]: (
        <FaArrowUp className="text-blue-500" aria-label="Access" />
      ),
      [OperationTypes.Modify]: (
        <FaArrowDown className="text-yellow-500" aria-label="Modify" />
      ),
      [OperationTypes.Search]: (
        <FaSearch className="text-purple-500" aria-label="Search" />
      ),
      [OperationTypes.Utility]: (
        <FaCogs className="text-gray-500" aria-label="Utility" />
      ),
      [OperationTypes.Traversal]: (
        <FaRoute className="text-teal-500" aria-label="Traversal" />
      ),
    };
    return (
      icons[type as keyof typeof icons] || (
        <FaInfoCircle className="text-gray-500" aria-label="Info" />
      )
    );
  };

  const filteredItems = items.filter(
    (item) =>
      (item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.code.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!filterType || item.type === filterType),
  );

  const toggleFilterType = (type: string) => {
    setFilterType((prevType) => (prevType === type ? null : type));
  };

  const toggleExpanded = (index: string) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const expandAll = () =>
    setExpandedSections(filteredItems.map((_, i) => i.toString()));
  const collapseAll = () => setExpandedSections([]);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <Card className="mt-6 max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-3xl font-bold">
          {/* <span>{cheatSheet.title}</span> */}
          <TooltipProvider>
            <Tooltip>
              <TooltipContent>
                {/* <p>
                  This cheat sheet provides quick reference for{' '}
                  {cheatSheet.title} operations.
                </p> */}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-3">Operation Types</h3>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-2 pb-2">
              {Object.values(OperationTypes).map((type) => (
                <Button
                  key={type}
                  variant={filterType === type ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => toggleFilterType(type)}
                  className="flex items-center gap-2"
                >
                  {getIcon(type)}{' '}
                  <span className="capitalize">{type}</span>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="mb-6 relative">
          <Input
            type="text"
            placeholder="Search operations..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 text-lg"
          />
          <FaSearch className="absolute top-3 left-3 text-gray-400 text-xl" />
        </div>

        <div className="mb-4 flex justify-between items-center">
          <span className="text-lg text-gray-500">
            {filteredItems.length} operations found
          </span>
          <div className="flex gap-2">
            <Button onClick={collapseAll} variant="outline" size="sm">
              Collapse All
            </Button>
            <Button onClick={expandAll} size="sm">
              Expand All
            </Button>
          </div>
        </div>

        <Accordion
          type="multiple"
          value={expandedSections}
          className="space-y-3"
        >
          {filteredItems.map((item, index) => (
            <AccordionItem key={index} value={index.toString()}>
              <AccordionTrigger
                onClick={() => toggleExpanded(index.toString())}
              >
                <div className="flex items-center gap-3 text-xl">
                  {getIcon(item.type as OperationTypes)}
                  <span className="font-semibold">{item.label}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col gap-6">
                      <div className="w-full">
                        <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                          <FaCode className="text-blue-500" />
                          Code
                        </h4>
                        <div className="relative">
                          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                            <code className="text-lg">{item.code}</code>
                          </pre>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2"
                            onClick={() => copyToClipboard(item.code, index)}
                          >
                            {copiedIndex === index ? (
                              <FaCheck className="text-green-500" />
                            ) : (
                              <FaCopy />
                            )}
                          </Button>
                        </div>
                      </div>
                      <div className="w-full">
                        <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                          <FaLightbulb className="text-yellow-500" />
                          Explanation
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
                          {item.explanation}
                        </p>
                        {item.timeComplexity && (
                          <div className="mb-4">
                            <Badge variant="secondary" className="text-lg">
                              <FaClock className="mr-2" />
                              {item.timeComplexity}
                            </Badge>
                          </div>
                        )}
                        {item.edgeCase && (
                          <Alert>
                            <AlertTitle className="flex items-center gap-2 text-lg">
                              <FaExclamationTriangle className="text-yellow-500" />
                              Edge Case
                            </AlertTitle>
                            <AlertDescription className="text-lg">
                              {item.edgeCase}
                            </AlertDescription>
                          </Alert>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
      {/* 
      <Alert className="mt-6">
        <FaInfoCircle className="mr-2 text-xl" />
        <AlertTitle className="text-xl">Pro Tip</AlertTitle>
        <AlertDescription className="text-lg">
          Practice these operations on LeetCode to reinforce your understanding!
        </AlertDescription>
      </Alert> */}
    </Card>
  );
};

export default CheatSheet;
