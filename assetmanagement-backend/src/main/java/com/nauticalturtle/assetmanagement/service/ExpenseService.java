package com.nauticalturtle.assetmanagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nauticalturtle.assetmanagement.model.Expense;
import com.nauticalturtle.assetmanagement.repository.ExpenseRepository;

@Service
public class ExpenseService {
    private final ExpenseRepository repository;

    @Autowired
    public ExpenseService(ExpenseRepository repository) {
        this.repository = repository;
    }

    public List<Expense> getAllExpenses() {
        return repository.findAll();
    }

    public Optional<Expense> getExpenseById(Long id) {
        return repository.findById(id);
    }

    public List<Expense> getExpensesByMonth(int month) {
        return repository.findByMonth(month);
    }

    public List<Expense> getExpensesByYear(int year) {
        return repository.findByYear(year);
    }

    public List<Expense> getExpensesByMonthAndYear(int month, int year) {
        return repository.findByMonthAndYear(month, year);
    }

    public List<Expense> getExpensesByMonthYearAndCategory(int month, int year, String category) {
        return repository.findByMonthAndYearAndCategory(month, year, category);
    }

    public List<Expense> getExpensesByCategory(String category) {
        return repository.findByCategory(category);
    }
    public Expense createExpense(Expense expense) {
        return repository.save(expense);
    }

    public Expense updateExpense(Long id, Expense expense) {
        if (repository.existsById(id)) {
            expense.setId(id); // Ensure the ID is set for the update operation
            return repository.save(expense);
        } else {
            // Handle error or throw exception for expense not found
            return null;
        }
    }

    public void deleteExpense(Long id) {
        repository.deleteById(id);
    }



}

