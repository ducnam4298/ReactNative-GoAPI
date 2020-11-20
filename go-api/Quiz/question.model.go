package Quiz

type Question struct {
	ID       uint64 `json:"id" gorm:"primaryKey;autoIncrement"`
	Question string `json:"question" gorm:"unique;not null"`
	Type     string `json:"type" gorm:"not null"`
}
type Answer struct {
	ID         uint64     `json:"id" gorm:"primaryKey;autoIncrement"`
	QuestionID []Question `json:"question_id" gorm:"foreignKey:quenstion_id;references:id"`
	Answer     string     `json:"answer" gorm:"not null"`
}

func (a *Answer) TableName() string {
	return "answers"
}

func (q *Question) TableName() string {
	return "questions"
}
