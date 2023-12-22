package com.nauticalturtle.assetmanagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nauticalturtle.assetmanagement.model.Expense;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {
    List<Expense> findByMonth(int month);
    List<Expense> findByYear(int year);
    List<Expense> findByMonthAndYear(int month, int year);
    List<Expense> findByMonthAndYearAndCategory(int month, int year, String category);
    List<Expense> findByCategory(String category);
}

