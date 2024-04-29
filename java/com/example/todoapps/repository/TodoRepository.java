package com.example.todoapps.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.todoapps.model.TodoItem;

public interface TodoRepository extends JpaRepository<TodoItem,Long> {

}
