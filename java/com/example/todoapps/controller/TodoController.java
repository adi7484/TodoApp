package com.example.todoapps.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.todoapps.model.TodoItem;
import com.example.todoapps.service.TodoService;

@RestController
@RequestMapping("/todos")
@CrossOrigin(origins = "http://localhost:3000") 
public class TodoController {

	@Autowired
	private TodoService todoService;
	
	@GetMapping
	public ResponseEntity<List<TodoItem>> getAllTodos(){
		return ResponseEntity.ok(todoService.getAllTodoItems());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<TodoItem> getTodoItemById(@PathVariable Long id){
		TodoItem todoItem=todoService.getTodoItemById(id);
		if(todoItem!=null) {
			return ResponseEntity.ok(todoItem);
		}else {
			return ResponseEntity.notFound().build();
		}
		
	}
	
	@PostMapping
	public ResponseEntity<TodoItem> createTodoItem(@RequestBody TodoItem todoItem){
		TodoItem createdTodoItem=todoService.createTodo(todoItem);
		return ResponseEntity.status(201).body(createdTodoItem);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<TodoItem> updateTodoItem(@PathVariable Long id,@RequestBody TodoItem todoItemDetails){
		TodoItem existing=todoService.updateTodo(id, todoItemDetails);
		if(existing!=null) {
		    return ResponseEntity.ok(todoItemDetails);
        } else {
            return ResponseEntity.notFound().build();
        }
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteTodoItem(@PathVariable Long id){
		todoService.deleteTodoItem(id);
		return ResponseEntity.noContent().build();
	}
	
	
}
