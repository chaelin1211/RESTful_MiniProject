package com.example.demo.todo_item;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import lombok.Setter;
import lombok.Getter;

import java.util.List;

import javax.management.RuntimeErrorException;

import java.util.ArrayList;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Getter @Setter
@RestController
@RequestMapping("/todo")
public class TodoController {
    @Autowired
    private TodoService todoService;

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public @ResponseBody TodoResponse get(@PathVariable(value="id") String id){
        List<String> errors = new ArrayList<>();
        TodoBean todoBean = null;
        try{
            todoBean = todoService.get(id);
        }catch(final Exception e){
            errors.add(e.getMessage());
        }
        return TodoAdapter.toTodoResponse(todoBean, errors);
    }

    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody List<TodoResponse> getAll(){
        List<String> errors = new ArrayList<>();
        List<TodoBean> todoBeans = todoService.getAll();
        List<TodoResponse> todoResponses = new ArrayList<TodoResponse>();

        todoBeans.stream().forEach(todoBean->{
            // todobean 각각을 adapter를 통해 response로 만들어 저장
            todoResponses.add(TodoAdapter.toTodoResponse(todoBean, errors));
        });
        return todoResponses;
    }

    @RequestMapping(method=RequestMethod.POST)
    public @ResponseBody TodoResponse create(@RequestBody final TodoRequest todoRequest){
        List<String> errors = new ArrayList<>();
        TodoBean todoBean = TodoAdapter.toTodoBean(todoRequest);
        try{
            todoBean = todoService.create(todoBean);
        }catch(final Exception e){
            errors.add(e.getMessage());
            e.printStackTrace();
        }
        return TodoAdapter.toTodoResponse(todoBean, errors);
    }
    
    @RequestMapping(method=RequestMethod.PATCH)
    public @ResponseBody TodoResponse update(@RequestBody final TodoRequest todoRequest){
        List<String> errors = new ArrayList<>();
        TodoBean todoBean = TodoAdapter.toTodoBean(todoRequest);
        try{
            todoBean = todoService.update(todoBean);
        }catch(final Exception e){
            errors.add(e.getMessage());
            e.printStackTrace();
        }
        return TodoAdapter.toTodoResponse(todoBean, errors);
    }

    @RequestMapping(method=RequestMethod.DELETE, value = "/{id}")
    public @ResponseBody TodoResponse delete(@PathVariable(value="id") String id){
        List<String> errors = new ArrayList<>();
        TodoBean todoBean = todoService.get(id);
        try{
            todoBean = todoService.delete(todoBean);
        }catch(final Exception e){
            errors.add(e.getMessage());
            e.printStackTrace();
        }
        return TodoAdapter.toTodoResponse(todoBean, errors);
    }
}
