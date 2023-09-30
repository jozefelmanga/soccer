package com.example.webdevteam.springaout.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdevteam.springaout.models.MatchModel;
import com.example.webdevteam.springaout.services.MatchService;

@RestController
@RequestMapping("/api/matches")
@CrossOrigin("*")
public class MatchController {
	
	@Autowired
	public MatchService mService;

	@GetMapping
	public List<MatchModel> getAll(){
		return mService.getAllMatches();
	}
	
	@GetMapping("/{id}")
	public MatchModel getById(@PathVariable Long id){
		return mService.getMatchById(id);
	}
	
	@PostMapping
	public MatchModel addMatch(@RequestBody MatchModel m){
		return mService.addMatch(m);
	}
	
	@PutMapping
	public MatchModel updateMatch(@RequestBody MatchModel m){
		return mService.updateMatch(m);
	}
	
	@DeleteMapping("/{id}")
	public void deleteById(@PathVariable Long id){
		mService.deleteMatchById(id);
	}
	
	
	

}
