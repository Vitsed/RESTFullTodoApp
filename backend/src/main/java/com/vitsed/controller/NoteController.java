package com.vitsed.controller;


import com.vitsed.model.ApiResponse;
import com.vitsed.model.Note;
import com.vitsed.model.NoteDto;
import com.vitsed.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/todolist")
public class NoteController {

    @Autowired
    private NoteService noteService;

    @PostMapping
    public ApiResponse<Note> saveItem(@RequestBody NoteDto item) {
        return new ApiResponse<>(HttpStatus.OK.value(), "Todo item saved successfully.", noteService.save(item));
    }

    @GetMapping
    public ApiResponse<List<Note>> listItem() {
        return new ApiResponse<>(HttpStatus.OK.value(), "Todo list fetched successfully.", noteService.findAll());
    }

    @GetMapping("/{id}")
    public ApiResponse<List<Note>> getOne(@PathVariable int id) {
        return new ApiResponse<>(HttpStatus.OK.value(), "Todo item fetched successfully.", noteService.findById(id));
    }

    @PutMapping("/{id}")
    public ApiResponse<List<Note>> update(@RequestBody NoteDto noteDto) {
        return new ApiResponse<>(HttpStatus.OK.value(), "Todo item updated successfully.", noteService.update(noteDto));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<List<Note>> delete(@PathVariable int id) {
        noteService.delete(id);
        return new ApiResponse<>(HttpStatus.OK.value(), "Todo item deleted successfully.", null);
    }
}
