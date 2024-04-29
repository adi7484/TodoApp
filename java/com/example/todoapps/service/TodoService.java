package com.example.todoapps.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todoapps.model.TodoItem;
import com.example.todoapps.repository.TodoRepository;

@Service
public class TodoService {

	@Autowired
	private TodoRepository todoRepository;
	
	public List<TodoItem> getAllTodoItems(){
		return todoRepository.findAll();
	}
	
	public TodoItem getTodoItemById(Long id) {
		return todoRepository.getById(id);
	}
	
	public TodoItem createTodo(TodoItem todoItem) {
		return todoRepository.save(todoItem);
	}
	
	public TodoItem updateTodo(Long id,TodoItem todoItemDetails) {
		TodoItem existing =todoRepository.findById(id).orElse(null);
		if(existing!=null) {
			existing.setId(id);
			existing.setTitle(todoItemDetails.getTitle());
			existing.setContent(todoItemDetails.getContent());
			existing.setCompleted(todoItemDetails.isCompleted());
			return todoRepository.save(existing);
			
		}
		return null;
	}
	
	public void deleteTodoItem(Long id) {
		todoRepository.deleteById(id);
	}
	
	
}
