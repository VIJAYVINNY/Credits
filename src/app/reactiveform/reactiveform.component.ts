import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss'],
})
export class ReactiveformComponent implements OnInit {
  notifivation=4

  // subjects=['C#','ASP','JAVA','SQL','MongoDB','ASP.NET TUTORIALS','qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',"sdfsdsdgdgggasdgdsgsgsdgsdgsdgsdgsdggasdgsdgtwetaeratqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqdhdfh"];

  subjects = ['C#', 'ASP', 'JAVA', 'SQL', 'MongoDB'];

  userModel = new User('vijay', 'vijay111.gummadi@gmail.com', 9603722638, 'default', 'morning', true);

  constructor(private enrollmentService: EnrollmentService) {}

  topicHasError = true;
  submitted=false;

  ngOnInit(): void {}

  validateTopic(value: string) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {


this.submitted=true;
    this.enrollmentService.enroll(this.userModel).subscribe(
     (data) => console.log('Success!', data),
     (error) => console.log('Error!', error)
    );
  }
}
