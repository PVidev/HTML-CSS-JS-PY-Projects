import os
import json

EXPENSES_FILE = "expenses.json"

class ExpenseTracker:
    def __init__(self):
        self.expenses = []
        self.load_expenses()

    def show_menu(self):
        print("\nExpense Tracker")
        print("1. Add Expense")
        print("2. View Expenses")
        print("3. Remove Expense")
        print("4. View Summary")
        print("5. Save Expenses")
        print("6. Load Expenses")
        print("7. Exit")

    def add_expense(self):
        try:
            category = input("Enter category (e.g., Food, Transport, Bills): ")
            amount = float(input("Enter amount: "))
            description = input("Enter description: ")
            expense = {"category": category, "amount": amount, "description": description}
            self.expenses.append(expense)
            print("Expense added successfully!")
        except ValueError:
            print("Invalid input. Please enter a valid amount.")

    def view_expenses(self):
        if not self.expenses:
            print("No expenses recorded.")
            return
        print("\nRecorded Expenses:")
        for index, expense in enumerate(self.expenses, start=1):
            print(f"{index}. {expense['category']} - ${expense['amount']:.2f} ({expense['description']})")

    def remove_expense(self):
        self.view_expenses()
        try:
            index = int(input("Enter expense number to remove: ")) - 1
            if 0 <= index < len(self.expenses):
                removed_expense = self.expenses.pop(index)
                print(f"Removed expense: {removed_expense['category']} - ${removed_expense['amount']:.2f}")
            else:
                print("Invalid expense number.")
        except ValueError:
            print("Please enter a valid number.")

    def view_summary(self):
        if not self.expenses:
            print("No expenses recorded.")
            return
        summary = {}
        total_expenses = 0
        for expense in self.expenses:
            category = expense["category"]
            amount = expense["amount"]
            total_expenses += amount
            if category in summary:
                summary[category] += amount
            else:
                summary[category] = amount
        print("\nExpense Summary:")
        for category, total in summary.items():
            print(f"{category}: ${total:.2f}")
        print(f"Total Expenses: ${total_expenses:.2f}")

    def save_expenses(self):
        with open(EXPENSES_FILE, "w") as file:
            json.dump(self.expenses, file, indent=4)
        print("Expenses saved successfully!")

    def load_expenses(self):
        if os.path.exists(EXPENSES_FILE):
            with open(EXPENSES_FILE, "r") as file:
                self.expenses = json.load(file)
            print("Expenses loaded successfully!")
        else:
            print("No saved expenses found.")

    def run(self):
        while True:
            self.show_menu()
            choice = input("Choose an option: ")  # ❌ Излишната цифра "1" премахната
            if choice == "1":
                self.add_expense()
            elif choice == "2":
                self.view_expenses()
            elif choice == "3":
                self.remove_expense()
            elif choice == "4":
                self.view_summary()
            elif choice == "5":
                self.save_expenses()
            elif choice == "6":
                self.load_expenses()
            elif choice == "7":
                print("Exiting... Have a great day!")
                break
            else:
                print("Invalid option. Please try again.")

if __name__ == "__main__":
    tracker = ExpenseTracker()
    tracker.run()
