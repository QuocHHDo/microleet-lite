import React from 'react';
import OOPModulePage from '@/components/OOPModulePage';

export default function EncapsulationPage() {
  return (
    <OOPModulePage
      title="Encapsulation"
      description="Bundle data and methods together, restricting direct access to internal components and ensuring controlled interaction."
      keyConcepts={[
        'Hides internal state and requires all interaction to be performed through an object’s methods.',
        'Improves maintainability by decoupling internal implementations.',
        'Prevents external interference or misuse of data.',
      ]}
      detailedLessons={`Encapsulation is one of the four pillars of OOP. It is the mechanism that binds code 
and the data it manipulates and keeps both safe from outside interference and misuse. 
By providing controlled methods of access (e.g., getters and setters), you maintain 
clear boundaries and responsibilities within your code.

In interviews, you'll often be asked to explain how encapsulation helps achieve 
modularity and increases code reusability. Be prepared to discuss real-world examples 
like a 'BankAccount' or 'UserProfile' class that hides sensitive data behind methods.`}
      codeExamples={[
        `class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  withdraw(amount: number) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}`,
      ]}
      practiceProblems={[
        {
          name: 'Encapsulate Variables',
          description:
            'Refactor a class that exposes all fields as public, converting them into private fields and controlled methods.',
          difficulty: 'Easy',
        },
        {
          name: 'Enhanced BankAccount',
          description:
            'Extend BankAccount to include transaction logging and ensure no direct write access to logs.',
          difficulty: 'Medium',
        },
      ]}
      quizzes={[
        {
          question: 'What is Encapsulation primarily used for?',
          options: [
            'Enabling multiple inheritance',
            'Hiding data implementation details',
            'Implementing design patterns',
            'Ensuring code compiles faster',
          ],
          correctAnswerIndex: 1,
        },
      ]}
      cheatSheetItems={[
        {
          label: 'Definition',
          details:
            'Encapsulation hides internal data and requires all interaction through an object’s methods.',
        },
        {
          label: 'Benefits',
          details:
            'Improves code maintainability, security, and clarity. Reduces potential side effects.',
        },
      ]}
      designPatterns={[
        'Factory Pattern (controlled object creation)',
        'Proxy Pattern (controlled access)',
      ]}
      additionalResources={[
        {
          title: 'Official Java Encapsulation Documentation',
          url: 'https://docs.oracle.com/javase/tutorial/java/concepts',
        },
        {
          title: 'C# Encapsulation Basics',
          url: 'https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/encapsulation',
        },
      ]}
      interviewInsights={[
        'Interviewers often ask for everyday analogies: “Encapsulation is like a vending machine where the internal mechanism is hidden, and you only interact through an interface.”',
        'Highlight how encapsulation ensures changes in internal structure do not impact external code.',
      ]}
      progressKey="encapsulation"
    />
  );
}
