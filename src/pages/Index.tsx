
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/Icon';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F7FB]">
      {/* Шапка сайта */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Icon name="GraduationCap" size={24} className="text-violet-600" />
            </div>
            <h1 className="ml-3 text-xl font-bold text-slate-800">РазвивайКа</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><Link to="/" className="text-violet-700 font-medium">Главная</Link></li>
              <li><Link to="/about" className="text-slate-600 hover:text-violet-700 transition-colors">О нас</Link></li>
              <li><Link to="/categories" className="text-slate-600 hover:text-violet-700 transition-colors">Категории</Link></li>
            </ul>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      {/* Интро секция */}
      <section className="py-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Открой для своего<br />
              ребенка что-то новое<br />
              и увлекательное
            </h1>
            <p className="text-lg text-slate-600 mb-10">
              Подборка развивающих игр для детей различных возрастов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="h-32 bg-pink-100 flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                <Icon name="Baby" size={48} className="text-pink-500" />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-lg text-slate-800">2-4 лет</h3>
                <p className="text-slate-600 mt-2">Игры для самых маленьких</p>
                <Button className="mt-4 w-full bg-pink-500 hover:bg-pink-600">Смотреть</Button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="h-32 bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Icon name="Puzzle" size={48} className="text-blue-500" />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-lg text-slate-800">5-10 лет</h3>
                <p className="text-slate-600 mt-2">Развивающие головоломки</p>
                <Button className="mt-4 w-full bg-blue-500 hover:bg-blue-600">Смотреть</Button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="h-32 bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <Icon name="BrainCircuit" size={48} className="text-green-500" />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-lg text-slate-800">11-15 лет</h3>
                <p className="text-slate-600 mt-2">Интеллектуальные задачи</p>
                <Button className="mt-4 w-full bg-green-500 hover:bg-green-600">Смотреть</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* О нас секция */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-10">
              Интересные статьи о полезности развивающих игр
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80" 
                  alt="Мальчик играет" 
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-slate-700 leading-relaxed">
                  Сегодня все родители озабочены ранним развитием ребенка, почти 
                  с пеленок водят его в развивающие студии, многочисленные кружки 
                  и секции. Ребенка учат буквам, как только он начинает ходить, а то и раньше.
                  <br /><br />
                  Стремление вырастить из ребенка гения приводит
                  к обесцениванию простой игры. Она кажется 
                  родителям пустой тратой времени. Так ли это на самом деле?
                  Какова польза игр для детей?
                  <br /><br />
                  Рассказывает психолог Виктория Мелихова.
                </p>
                <Button variant="outline" className="mt-4 flex items-center">
                  <span>Подробнее</span>
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="bg-violet-50 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-violet-800 mb-4">
                Почему игры важны для развития ребенка?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-violet-200 rounded-full p-2 mr-3">
                    <Icon name="Brain" className="text-violet-700 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">Развитие когнитивных функций</h4>
                    <p className="text-slate-600 text-sm mt-1">Память, внимание, логика и креативное мышление</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-violet-200 rounded-full p-2 mr-3">
                    <Icon name="Users" className="text-violet-700 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">Социализация</h4>
                    <p className="text-slate-600 text-sm mt-1">Умение общаться и работать в команде</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-violet-200 rounded-full p-2 mr-3">
                    <Icon name="Heart" className="text-violet-700 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">Эмоциональный интеллект</h4>
                    <p className="text-slate-600 text-sm mt-1">Понимание своих чувств и эмпатия</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-violet-200 rounded-full p-2 mr-3">
                    <Icon name="Sparkles" className="text-violet-700 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">Творческое мышление</h4>
                    <p className="text-slate-600 text-sm mt-1">Воображение и нестандартный подход к задачам</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-slate-800 py-10 text-white mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">РазвивайКа</h3>
              <p className="text-slate-300">
                Сайт с развивающими играми для детей разных возрастов. Делаем обучение веселым!
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Навигация</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-slate-300 hover:text-white">Главная</Link></li>
                <li><Link to="/about" className="text-slate-300 hover:text-white">О нас</Link></li>
                <li><Link to="/categories" className="text-slate-300 hover:text-white">Категории</Link></li>
                <li><Link to="/contact" className="text-slate-300 hover:text-white">Контакты</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Подписаться</h3>
              <p className="text-slate-300 mb-4">Получайте новости о новых играх и статьях</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="bg-slate-700 rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                <Button className="rounded-l-none">
                  <Icon name="Send" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-400">
            <p>© 2025 РазвивайКа. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
