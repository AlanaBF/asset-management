package com.nauticalturtle.assetmanagement.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nauticalturtle.assetmanagement.model.Expense;
import com.nauticalturtle.assetmanagement.service.ExpenseService;

@RestController
	@RequestMapping("/api/v1/expenses")
	public class ExpenseController {
	    private final ExpenseService service;

	    @Autowired
	    public ExpenseController(ExpenseService service) {
	        this.service = service;
	    }

	    @GetMapping
	    public List<Expense> getAllExpenses() {
	        return service.getAllExpenses();
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Expense> getExpenseById(@PathVariable Long id) {
	        Optional<Expense> expense = service.getExpenseById(id);
	        return expense.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
	    }

		@GetMapping("/month/{month}")
		public List<Expense> getExpensesByMonth(@PathVariable int month) {
			return service.getExpensesByMonth(month);
		}
	
		@GetMapping("/year/{year}")
		public List<Expense> getExpensesByYear(@PathVariable int year) {
			return service.getExpensesByYear(year);
		}
	
		@GetMapping("/month/{month}/year/{year}")
		public List<Expense> getExpensesByMonthAndYear(@PathVariable int month, @PathVariable int year) {
			return service.getExpensesByMonthAndYear(month, year);
		}
	
		@GetMapping("/month/{month}/year/{year}/category/{category}")
		public List<Expense> getExpensesByMonthYearAndCategory(@PathVariable int month, @PathVariable int year, @PathVariable String category) {
			return service.getExpensesByMonthYearAndCategory(month, year, category);
		}
	
		@GetMapping("/category/{category}")
		public List<Expense> getExpensesByCategory(@PathVariable String category) {
			return service.getExpensesByCategory(category);
		}



	    @PostMapping
	    public ResponseEntity<Expense> createExpense(@RequestBody Expense expense) {
	        Expense createdExpense = service.createExpense(expense);
	        return ResponseEntity.status(HttpStatus.CREATED).body(createdExpense);
	    }

	    @PutMapping("/{id}")
	    public ResponseEntity<Expense> updateExpense(@PathVariable Long id, @RequestBody Expense expense) {
	        Expense updatedExpense = service.updateExpense(id, expense);
	        return updatedExpense != null ?
	                ResponseEntity.ok(updatedExpense) :
	                ResponseEntity.notFound().build();
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteExpense(@PathVariable Long id) {
	        service.deleteExpense(id);
	        return ResponseEntity.noContent().build();
	    }
	}

