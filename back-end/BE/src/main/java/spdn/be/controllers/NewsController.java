package spdn.be.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import spdn.be.entity.News;
import spdn.be.payload.response.MessageResponse;
import spdn.be.sercurity.IFileSytemStorage;
import spdn.be.sercurity.services.NewsService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/news")
public class NewsController {
    @Autowired
    IFileSytemStorage fileSytemStorage;
    @Autowired
    NewsService newsService;
    @PostMapping("/uploadfile")
    public ResponseEntity<News> uploadSingleFile (@RequestParam("file") MultipartFile file,
                                                  @RequestParam("content") String content,
                                                  @RequestParam("title") String title) {

        String Nameurl = fileSytemStorage.saveFile(file);

        String imageurl = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/api/download/")
                .path(Nameurl)
                .toUriString();
        News news = new News(content,title,Nameurl,imageurl);
        newsService.addnews(news);
        return ResponseEntity.status(HttpStatus.OK).body(new News(content,title,Nameurl,imageurl));
    }
    @GetMapping("/list-news")
    public ResponseEntity<Page<News>> getAllNews(@PageableDefault(size = 10) Pageable pageable) {
        Page<News> newsPage = this.newsService.getAllNews(pageable);

        if (newsPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        }
        return new ResponseEntity<>(newsPage,HttpStatus.OK);
    }
    @PutMapping("/update-news/{id}")
    public ResponseEntity<MessageResponse> updateNews (@RequestParam("file") MultipartFile file,
                                                       @RequestParam("content") String content,
                                                       @RequestParam("title") String title,
                                                       @PathVariable  long id   ) {


        String Nameurl = fileSytemStorage.saveFile(file);


        String imageurl = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/api/download/")
                .path(Nameurl)
                .toUriString();


        News newsS = new News(content,title,Nameurl,imageurl);
        newsService.updateNews(id,newsS);
        //return ResponseEntity.status(HttpStatus.OK).body(new News(content,title,Nameurl,imageurl));
        return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse("You've been signed out!"));
    }
    @DeleteMapping("/delete-news/{id}")
    public ResponseEntity<MessageResponse> Deletenews (@PathVariable Long id   ) {
        newsService.deleteNewsById(id);
        return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse("You've been signed out!"));
    }
}
