package com.vitsed.service;

import com.vitsed.model.Note;
import com.vitsed.model.NoteDto;

import java.util.List;

public interface NoteService {

    Note save(NoteDto item);

    List<Note> findAll();

    void delete(int id);

    Note findOne(String item);

    Note findById(int id);

    NoteDto update(NoteDto noteDto);

}
